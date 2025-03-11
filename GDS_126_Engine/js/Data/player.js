/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		idle: `images/pumpkin.png`,
		walk: `images/PumpkinSpriteWalking.png`,
		crouch: `images/PumpkinSpriteCrouch.png`,
		jump: `images/PumpkinSpriteJump.png`,
		attack: `images/PumpkinSpriteAttack (1).png`,
		projectile: `images/PumpkinProjectile.png`,
		
	},
	states:{
		//The idle animation 
		projectile:
		{
			fps:3,
			cycle:true,
			frames:
			[
				{width:32, height:32, startX:0, startY:0},
				{width:32, height:32, startX:32, startY:0},
				{width:32, height:32, startX:32*2, startY:0},
				{width:32, height:32, startX:32*3, startY:0},
			]
		},
    	idle:
		{
			fps:8,
			cycle:true,
			frames:
			[
				{width:640, height:640, startX:0, startY:0},
				{width:640, height:640, startX:640, startY:0},
				{width:640, height:640, startX:640*2, startY:0},
				{width:640, height:640, startX:640*3, startY:0},
				{width:640, height:640, startX:640*4, startY:0},
				{width:640, height:640, startX:640*5, startY:0},
				{width:640, height:640, startX:640*6, startY:0},
				{width:640, height:640, startX:640*7, startY:0},
				{width:640, height:640, startX:640*8, startY:0},
				{width:640, height:640, startX:640*9, startY:0},
				{width:640, height:640, startX:640*10, startY:0},
				{width:640, height:640, startX:640*11, startY:0},
				{width:640, height:640, startX:640*12, startY:0},
				{width:640, height:640, startX:640*13, startY:0},
				{width:640, height:640, startX:640*14, startY:0},
				{width:640, height:640, startX:640*15, startY:0},
				{width:640, height:640, startX:640*16, startY:0},
				{width:640, height:640, startX:640*17, startY:0},
				{width:640, height:640, startX:640*18, startY:0},
				{width:640, height:640, startX:640*19, startY:0},
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:3,
			cycle:true,
			frames:
			[
				{width:640, height:640, startX:0, startY:0},
				{width:640, height:640, startX:640, startY:0},
				{width:640, height:640, startX:640*2, startY:0},
				{width:640, height:640, startX:640*3, startY:0},
				{width:640, height:640, startX:640*4, startY:0},
				{width:640, height:640, startX:640*5, startY:0},
				{width:640, height:640, startX:640*6, startY:0},
				{width:640, height:640, startX:640*7, startY:0},
			]
		},
		//The jump animation 
		jump:
		{
			fps:5,
			cycle:false,
			frames:
			[
				{width:640, height:640, startX:0, startY:0},
				{width:640, height:640, startX:0, startY:640},
				{width:640, height:640, startX:0, startY:640*2},
				{width:640, height:640, startX:0, startY:640*3},
				{width:640, height:640, startX:0, startY:640*4},
				{width:640, height:640, startX:0, startY:640*5},
				{width:640, height:640, startX:0, startY:640*6},
				{width:640, height:640, startX:0, startY:640*7},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:3,
			cycle:false,
			frames:
			[
				{width:640, height:640, startX:0, startY:0},
				{width:640, height:640, startX:640, startY:0},
				{width:640, height:640, startX:640*2, startY:0},
				{width:640, height:640, startX:640*3, startY:0},
				{width:640, height:640, startX:640*4, startY:0},
				{width:640, height:640, startX:640*5, startY:0},
				{width:640, height:640, startX:640*6, startY:0},
				{width:640, height:640, startX:640*7, startY:0},
				{width:640, height:640, startX:640*8, startY:0},
				{width:640, height:640, startX:640*9, startY:0},
				{width:640, height:640, startX:640*10, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:.3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:640, height:640, startX:0, startY:0},
				{width:640, height:640, startX:640, startY:0},
				{width:640, height:640, startX:640*2, startY:0},
				{width:640, height:640, startX:640*3, startY:0},
				{width:640, height:640, startX:640*4, startY:0},

				
			]
		}
	}
		
}