
// Constants
const g = 9.81; // acceleration due to gravity
const l = 0.5; // length of pendulum
const dt = 0.01; // time step

// Initial state
let theta = Math.PI / 4; // angle of pendulum (radians)
let thetaDot = 0; // angular velocity of pendulum (radians/s)

const WIDTH = 300;
const HEIGHT = 300;
const SCALE = 300;

function init() {

// Create p5 sketch
new p5(p5 => {
  p5.setup = () => {
    // Create canvas
    let canvas = p5.createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas-div');

    // postion canvas
    canvas.position(300, 100);

    // Set origin to center of canvas
    p5.translate(p5.width / 2, p5.height / 2);
  };

  p5.draw = () => {
    // Clear canvas
    p5.background(255);

    // Calculate angular acceleration
    const thetaDDot = -g * p5.sin(theta) / l;

    // Update angular velocity and angle
    thetaDot += thetaDDot * dt;
    theta += thetaDot * dt;

    // Draw pendulum
    p5.stroke(0);
    p5.line(WIDTH/2, 0, WIDTH/2 + l * p5.sin(theta) * SCALE, l * p5.cos(theta) * SCALE);
    p5.ellipse(WIDTH/2 + l * p5.sin(theta) * SCALE, l * p5.cos(theta) * SCALE, 20, 20);
  };
});

}

document.addEventListener('DOMContentLoaded', init);
