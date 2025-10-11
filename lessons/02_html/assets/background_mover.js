var background_offset = {
    x: 0,
    y: 0,
}

function moveBackground(target, speed = {x: 10, y: 10}) {
    background_offset.x += speed.x
    background_offset.y += speed.y
    target.style.backgroundPositionX = background_offset.x + 'px'
    target.style.backgroundPositionY = background_offset.y + 'px'
}