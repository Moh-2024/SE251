let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)
let fps = 1000/60
let timer = setInterval(main, fps)



box = new Box()

let key = []
document.addEventListener(`keydown`, function(e){
    key[e.key]=true
})


document.addEventListener(`keyup`, function(e){
    key[e.key]=false
})

function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    if(key[`w`])box.vy+= -1
    if(key[`s`])box.vy+= 1

    box.vy *= .9
    box.vx *= .9

    box.move()

    box.draw()

}

function rand(low, high){
    return Math.random() * (high + low) + low
}
