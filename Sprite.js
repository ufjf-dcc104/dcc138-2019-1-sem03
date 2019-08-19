function Sprite(exemplo) {
    var {
        x = 10,
        y = 100,
        w = 10,
        vx = 0,
        vy = 0
    } = exemplo;
    this.x = x;
    this.y = y;

    this.w = w;

    this.vx = vx;
    this.vy = vy;
 
}

Sprite.prototype = new Sprite({});
Sprite.constructor = Sprite;

Sprite.prototype.desenhar = function (ctx) {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.w);
}

Sprite.prototype.mover = function (dt) {
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}