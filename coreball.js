const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let angle = 0;
let pins = [];
let isGameOver = false;

// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// Function to rotate the ball
function rotateBall() {
    angle += 0.02;
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle);
    ctx.translate(-200, -200);
    drawBall();
    ctx.restore();
}

// Function to draw a pin
function drawPin(pin) {
    ctx.beginPath();
    ctx.moveTo(pin.x, pin.y);
    ctx.lineTo(pin.x, pin.y - 40);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

// Add a pin
function addPin() {
    pins.push({ x: 200, y: 100, angle: angle });
}

// Function to update the game
function update() {
    if (isGameOver) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rotateBall();

    // Draw each pin
    pins.forEach(pin => {
        drawPin(pin);
    });

    requestAnimationFrame(update);
}

// Listen for user input (click to add a pin)
canvas.addEventListener('click', () => {
    if (!isGameOver) {
        addPin();
    }
});

// Start the game
update();
