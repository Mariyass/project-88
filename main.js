
var canvas=new fabric.Canvas("myCanvas");
var ball_y=0;
var ball_x=0;
var hole_y=400;
var hole_x=800;

ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
        hole_object=Img;

        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
        ball_object=Img;

        ball_object.scaleToWidth(block_img_width);
        ball_object.scaleToHeight(block_img_height);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    })	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the Goal!!";
		document.getElementById("myCanvas").style.borderColor="red";

	}
	
	else{
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
		if(ball_y >=0){
			ball_y=ball_y-block_img_height;
			console.log("block image height ="-block_img_height);
			console.log("When Up arrow key is pressed, X ="=ball_x - ", Y ="+ball_y);
			canvas.remaove(ball_obj);
			new_image();

		}	
	}

	function down()
	{
		if(ball_y <=450){
			ball_y=ball_y+block_img_height;
			console.log("block image height ="+block_img_height);
			console.log("When Down  arrow key is pressed, X ="=ball_x + ", Y ="+ball_y);
			canvas.remaove(ball_obj);
			new_image();

		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_img_width;
			console.log("block image width ="-block_img_width);
			console.log("When Left arrow key is pressed, Y ="=ball_y -", X ="+ball_y);
			canvas.remaove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_img_width;
			console.log("block image width ="-block_img_width);
			console.log("When Left arrow key is pressed, Y ="=ball_y +", X ="+ball_y);
			canvas.remaove(ball_obj);
			new_image();	
		}
	}
	
}

