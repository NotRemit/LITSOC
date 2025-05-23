class Snowflake {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.reset();
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.wind = Math.random() * 0.5 - 0.25; // Random horizontal movement
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -10; // Start slightly above the canvas
    }

    update() {
        this.y += this.speed;
        this.x += this.wind; // Add horizontal movement

        // Reset when snowflake goes off screen
        if (this.y > this.canvas.height + 10 || 
            this.x < -10 || 
            this.x > this.canvas.width + 10) {
            this.reset();
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        this.ctx.fill();
    }
}

function initSnow() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('snow-canvas');
    const hero = document.querySelector('.hero');
    hero.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const snowflakes = [];
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(new Snowflake(canvas));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach(snowflake => {
            snowflake.update();
            snowflake.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

document.addEventListener('DOMContentLoaded', initSnow); 