const x = document.getElementById('canvas');
const ctx = x.getContext('2d');
let slide = 0;
class Truck {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius * 4;
    this.imgX = this.xPos  - this.radius;
  }
}
const img = document.createElement('img');
img.src = 'Truck.svg';
Truck.prototype.render = function() {
  ctx.save();
  // begin a  new sub-path
  ctx.beginPath();
  ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(img, this.imgX, this.yPos - this.radius, this.radius * 2, this.radius * 1.9);

};
Truck.prototype.motion = function() {
  this.imgX = this.imgX + 1;
  this.xPos = this.xPos + 1;
}
let object = new Truck(300, 750, 25);
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  object.render();
  object.motion();
  ctx.restore();
  requestAnimationFrame(animate);
}
animate();