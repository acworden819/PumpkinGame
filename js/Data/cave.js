var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,x,6,x,x,x,x,6,x,x,x,x,6,x,x,x,x,6,x,0],
			[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[0,x,x,x,x,x,8,8,8,8,8,x,x,x,x,x,8,8,x,2],
			[0,x,x,x,x,x,8,8,8,8,8,x,x,x,x,x,8,8,x,2],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

			
		],
		src:`images/bg2.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[7,7,7,7,5,5,7,7,7,5,5,7,7,7,5,5,7,7,7,7],
			[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[7,7,4,4,4,7,7,7,7,7,7,7,4,4,4,7,7,7,7,7],
			[7,7,4,4,4,7,7,7,7,7,7,7,4,4,4,7,7,7,7,7],
			],
			src:`images/bg2.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[7,7,4,4,4,7,7,7,7,7,7,7,4,4,4,7,7,7,7,7],
					
					
				],
				src:`images/bg2.png`,
			},
			states:caveData.states
			
			}