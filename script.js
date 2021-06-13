function runCanvas() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  class Parameters {
    constructor(originX, originY, speedX, speedY, color) {
      this.originX = originX;
      this.originY = originY;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
    }
  }
  const circle1 = new Parameters(200, 100, 1, 10, '#96858F');
  const circle2 = new Parameters(1000, 100, -1, 10, '#6D7993');
  const circle3 = new Parameters(100, 100, 0, 10, '#D6D86E');
  const circle4 = new Parameters(1100, 100, 0, 10, '#373737');

  function circle102() {
    if (circle1.originY - 200 < 200) {
      circle1.speedY = 5;
      circle1.speedX = 2;
    }
  }

  function circle101() {
    if (circle1.originY + 100 >= canvas.height && circle1.originX <= 252) {
      circle1.speedX += -8;
      circle1.speedY = -circle1.speedY;
      setTimeout(() => { circle102(); }, 700);
    }
    if (circle1.originX - 100 < 0) {
      circle1.speedX = -circle1.speedX;
    }
  }

  function circle202() {
    if (circle2.originY - 200 < 200) {
      circle2.speedY = 5;
      circle2.speedX = -2;
    }
  }
  function circle201() {
    if (circle2.originY + 100 >= canvas.height && circle2.originX >= 900) {
      circle2.speedX += 8;
      circle2.speedY = -circle2.speedY;
      setTimeout(() => { circle202(); }, 700);
    }
    if (circle2.originX + 100 >= canvas.width) {
      circle2.speedX = -circle2.speedX;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = circle1.color;
    ctx.arc(circle1.originX, circle1.originY, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = circle2.color;
    ctx.arc(circle2.originX, circle2.originY, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = circle3.color;
    ctx.arc(circle3.originX, circle3.originY, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = circle4.color;
    ctx.arc(circle4.originX, circle4.originY, 100, 0, 2 * Math.PI);
    ctx.fill();
    circle101(circle1);
    circle201(circle2);

    circle1.originX += circle1.speedX;
    circle1.originY += circle1.speedY;
    circle2.originX += circle2.speedX;
    circle2.originY += circle2.speedY;
    circle3.originX += circle3.speedX;
    circle3.originY += circle3.speedY;
    circle4.originX += circle4.speedX;
    circle4.originY += circle4.speedY;

    window.requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}
runCanvas();
