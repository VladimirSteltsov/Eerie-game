export class CollisionAnimation {
  constructor(game, x, y){
    this.game = game
    this.imgWidth = 100
    this.imgHeight = 90
    this.image = boom
    this.sizeModifier = Math.random() + 0.5
    this.width = this.imgWidth * this.sizeModifier
    this.height = this.imgHeight * this.sizeModifier
    this.x = x - this.width * 0.5
    this.y = y - this.height * 0.5
    this.frameX = 0
    this.maxFrame = 4
    this.readyForDelete = false
    this.fps = 13
    this.frameInterval = 1000/this.fps
    this.frameTimer = 0
  }
  update(deltaTime){
    this.x -= this.game.speed
    if(this.frameTimer > this.frameInterval){
      this.frameTimer = 0
      if(this.frameX < this.maxFrame) this.frameX++
      else this.readyForDelete = true
    } else this.frameTimer += deltaTime
  }
  draw(context){
    context.drawImage(this.image, this.frameX * this.imgWidth, 0, this.imgWidth, this.imgHeight, this.x, this.y, this.width, this.height)
  }
}