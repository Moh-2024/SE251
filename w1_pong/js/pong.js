//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

var score = new Player()

//array player
const player = []
player[0] = new Player();
player[1] = new Player();
//array pad
const pad = []

pad[0] = player[0].pad;
pad[1] = player[1].pad;

//p1 setup
pad[0] = new Box();
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `yellow`


//p2 setup
pad[1] = new Box();
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].color = `red`

//ball setup
var ball = new Box();
ball.w = 15
ball.h = 15
ball.vx = -2
ball.vy = -2
ball.color = `white`

const scoreDiv = document.querySelectorAll('#score div');



function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
        pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }
    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //player collison
    for(let i = 0; i < pad.length; i++)
    {
        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        ball.vx = -1.5;
        player[1].score++;
        console.log(player[1])

    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2;  
        ball.y = c.height/2;   
        ball.vx = -ball.vx;
        ball.vx = -1.5;
        player[0].score++;
        console.log(player[0])
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }
    //p1 with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx *= -1.2;
    }

    //p2 with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx *= -1.2;
    }

    for(let i = 0; i < pad.length;i++)
    {
        pad[i].draw()
    }
    //draw the objects
    ball.draw()

    // Display the scores inside the canvas with big font
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${player[0].score} | ${player[1].score}`, c.width / 2, 50);

}
