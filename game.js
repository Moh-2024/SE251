let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)
let fps = 1000/60
let timer = setInterval(main, fps)

box = []
for(let i=0; i< 150; i++)
{
    box[i] = new Box()
    box[i].x = Math.round(rand(0, c.width))
    box[i].y = Math.round(rand(0, c.height))

    box[i].vy = Math.round(rand(5, 15))
    box[i].w = box[i].vy
    box[i].h = box[i].vy
}



function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    for(let i=0; i< box.length; i++)
    {
        box[i].move()
        if(box[i].y > c.height + box[i].h/2){
            box[i].y = 0 - box[i].h/2
        }
        box[i].draw()
    }

}

function rand(low, high){
    return Math.random() * (high + low) + low
}
