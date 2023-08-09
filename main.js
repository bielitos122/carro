canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75; 
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";  

greencar_x = 5;
greencar_y= 255;        

function add() {
	background_imgTag = new Image(); //definindo uma variável com uma nova imagem
	background_imgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	background_imgTag.src = background_image;   // carregar a imagem

	greencar_imgTag = new Image(); //definindo uma variável com uma nova imagem
	greencar_imgTag.onload = uploadGreenCar; // ajustando uma função, ao carregar essa variável
	greencar_imgTag.src = greencar_image;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 
}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadGreenCar();
	}
}

function down()
{
	if(greencar_y >=500)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x= greencar_x - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadGreenCar();
	}
}

function right()
{
	if(greencar_x <=700)
	{
		greencar_x =greencar_x + 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}
